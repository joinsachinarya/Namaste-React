export function RestaurantCard({ name, image, cuisine, locality }) {
    return (
        <>
            <img alt={name} src={image.url} />
            <h2>{name}</h2>
            <h3>{[cuisine[0].name, cuisine[1].name].join(", ")}</h3>
            <h4>{locality.name}</h4>
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

