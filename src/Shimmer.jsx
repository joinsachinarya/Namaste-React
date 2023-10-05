function Shimmer() {
    return (
        <div className="shimmer-container">
            {Array(12).fill("").map((item, index) => (
                <div className="shimmer" key={index}></div>
            ))}
        </div>
    )
}
export default Shimmer;