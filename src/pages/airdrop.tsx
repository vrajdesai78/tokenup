import Layout from "@/components/layout";
import { useTheme } from "next-themes";

const Aidrop = () => {
    const { theme } = useTheme();
    return (
        <Layout>
        <h1 className={`flex items-center justify-center h-[80vh] w-[80vw] text-3xl`}>Coming soon</h1>
        </Layout>
    )
}

export default Aidrop