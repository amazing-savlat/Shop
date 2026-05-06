import { useSearchParams } from "react-router-dom";

const ITEMS_PER_PAGE = 5;

function OrderPage({ data }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = Number(searchParams.get("page")) || 1;

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    // const currentItems = data.slice(
    //     (currentPage - 1) * ITEMS_PER_PAGE,
    //     currentPage * ITEMS_PER_PAGE,
    // );

    const goToPage = (page) => {
        setSearchParams({ page });
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <ul>
            </ul>

            <div className="pagination">
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    ← Назад
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => goToPage(page)}
                        style={{ fontWeight: currentPage === page ? "bold" : "normal" }}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Вперёд →
                </button>
            </div>
        </div>
    );
}

export default OrderPage

