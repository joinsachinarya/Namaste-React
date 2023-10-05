function Shimmer() {
    return (
        <>
            {
                Array(8).fill("").map((item, index) => {
                    <div className="shimmer" key={index}></div>
                })
            }
        </>
    )
}
export default Shimmer;