import Banner from "../components/home/Banner";
import QuizSection from "../components/home/QuizSection";
import AppLayout from "../layout.js/AppLayout";

const Home = () => {
    return (
        <AppLayout>
            <Banner />
            <QuizSection />
        </AppLayout>
    );
};

export default Home;