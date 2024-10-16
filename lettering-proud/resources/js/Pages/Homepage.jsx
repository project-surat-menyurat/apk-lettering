import Content from "@/Components/Homepage/Content";
import Footer from "@/Components/Homepage/Footer";
import Header from "@/Components/Homepage/Header";
import Navbar from "@/Components/Homepage/Navbar";
import { Head, Link } from "@inertiajs/react";
export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar />
            <Header />
            <Content />
            <Footer />
        </div>
    );
}
