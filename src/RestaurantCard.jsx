export function RestaurantCard(props) {
    const { data } = props;
    return (
        <div className="restaurant-card">
            {console.log(data)}
            <img alt={data.name} src={data.image.url} />
            <h2>{data.name}</h2>
            <h3>{[data.cuisine[0].name, data.cuisine[1].name].join(", ")}</h3>
            <h4>{data.locality.name}</h4>
        </div>
    )
}

export function Recommended() {

    return (
        <div className="recommended" >
            🌟
        </div>
    )

}

