import { Navbar, Footer } from "./components";
import ContentLayout from "./features/Content-Layout";

function LessonPost() {
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