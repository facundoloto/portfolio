import { Bars } from "react-loader-spinner";
import loaderStyle from "./loader.module.css";

export default function Loader({ isLoading }) {
    return (
        <>
            {
                isLoading && (
                    <div className={loaderStyle.centerLoader}>
                        <Bars
                            height="80"
                            width="80"
                            color="#35A29F"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                )
            }
        </>
    )
}
