export function RestaurantCard(props) {
    const { data, key } = props;
    return (
        <>
            <img alt={data.name} src={data.image.url} />
            <h2>{data.name}</h2>
            <h3>{[data.cuisine[0].name, data.cuisine[1].name].join(", ")}</h3>
            <h4>{data.locality.name}</h4>
        </>
    )
}

export function Recommended() {

    return (
        <div className="recommended" >
            Recommended 🌟
        </div>
    )

}

