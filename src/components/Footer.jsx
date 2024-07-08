import style from "../css/footer.module.css";

export default function Footer() {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <div>
            <footer className={`${style.footer} fixed-bottom text-center`}>
                <div className="container p-4">
                    <section >
                        <p>
                            Crafted with ❤️ By Rajat Sharma
                        </p>
                    </section>
                    <div className="text-center">
                        © {year} Copyright:
                        <a
                            href="https://www.github.com/Rajat-MSI"
                            className="text-reset fw-bold"
                            style={{fontSize:"1.5em"}}
                        >
                            <i className="bi bi-github ps-2"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}