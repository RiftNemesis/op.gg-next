import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
    return (
        <div className="bg-blue-500">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}