import { useEffect } from "react";
import ProductCard from "../../../Ui/ProductCard";
import style from "../GadgetsPage.module.css";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import useGadgetsStore from "../../../../store/useGadgetsStore";
import Basket from "../../../Ui/Basket/Basket";
import SearchInput from "../../../Ui/SearchInput";
import { Empty } from "antd";

const VALID_MARKETS = ["sports", "kids", "gadgets", 'orders'];

function GadgetsPage() {
  const visibleData = useGadgetsStore((state) => state.visibleData);
  const getData = useGadgetsStore((state) => state.getData);
  const { market } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!VALID_MARKETS.includes(market)) {
      navigate("/notFound", { replace: true });
      return;
    }
    getData(market);
  }, [getData, market, navigate]);

  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Basket />
        <SearchInput />
      </section>
      {visibleData.length > 0 ? (
        <section className={style.gridContainer}>
          {visibleData.map((el) => (
            <ProductCard
              key={el.id}
              name={el.name}
              price={el.price}
              inStock={el.inStock}
              id={el.id}
            />
          ))}
        </section>
      ) : (
        <Empty
          description="No products available."
          style={{ width: "100%", height: "100%" }}
        />
      )}
      <Outlet />
    </>
  );
}

export default GadgetsPage;
