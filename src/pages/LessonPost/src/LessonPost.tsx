import { useEffect } from "react";
import { Navbar, Footer } from "./components";
import ContentLayout from "./features/Content-Layout";

function LessonPost() {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return (
        <>
            <Navbar />
            <main>
                <ContentLayout />
            </main>
            <Footer />
        </>
    )
}

export default LessonPost;