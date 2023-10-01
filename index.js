import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
    return (
        <div className="header">
            <a href="/" className="logo">
                <img alt="logo" src="https://imgs.search.brave.com/F_CYamxHqVTQRWPNwX_Uy7OZCHnKI5rMvGUHLK7t940/rs:fit:500:0:0/g:ce/aHR0cHM6Ly92aWxs/YWVzY29uZGlkYXNl/YXR0bGUuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzA0/L3ZpbGxhLXNsaWRl/ci05LmpwZw" />
            </a>
            <ul>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

function Body() {
    return <RestauRantList />
}


let dataObject = [
    {
        "type": "restaurant",
        "info": {
            "resId": 20497454,
            "name": "Mashaallah Chicken Corner",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/20497454\/7348cf35be9b2fb33c23685c58f74465_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/20497454\/7348cf35be9b2fb33c23685c58f74465_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.9",
                "rating_text": "3.9",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "1,299",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.6",
                        "reviewCount": "13",
                        "reviewTextSmall": "13 Reviews",
                        "subtext": "13 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.6",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "1,286",
                        "reviewTextSmall": "1,286 Reviews",
                        "subtext": "1,286 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9400 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Paharganj, New Delhi",
                "address": "Shop 114, Amrit Kaur Market, Paharganj, New Delhi",
                "localityUrl": "ncr\/paharganj-delhi-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/north-indian\/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/biryani\/",
                    "name": "Biryani"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "25 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/ncr\/mashaallah-chicken-corner-1-paharganj-new-delhi\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/ncr\/mashaallah-chicken-corner-1-paharganj-new-delhi\/order",
            "clickActionDeeplink": ""
        },
        "distance": "2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"02b37e8c-010a-42b7-81a1-4549213a9c49\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20497454\",\"element_type\":\"listing\",\"rank\":1}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "20% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20462635,
            "name": "La Pino'z Pizza",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/7\/18619067\/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/7\/18619067\/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "3,787",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.2",
                        "reviewCount": "149",
                        "reviewTextSmall": "149 Reviews",
                        "subtext": "149 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.0",
                        "reviewCount": "3,638",
                        "reviewTextSmall": "3,638 Reviews",
                        "subtext": "3,638 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.0",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9500 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Karol Bagh, New Delhi",
                "address": "Shop 2, Old Rajinder Nagar Market, Karol Bagh, New Delhi",
                "localityUrl": "ncr\/karol-bagh-delhi-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/pizza\/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/pasta\/",
                    "name": "Pasta"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/italian\/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "31 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/ncr\/la-pinoz-pizza-karol-bagh-new-delhi\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/ncr\/la-pinoz-pizza-karol-bagh-new-delhi\/order",
            "clickActionDeeplink": ""
        },
        "distance": "3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"02b37e8c-010a-42b7-81a1-4549213a9c49\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20462635\",\"element_type\":\"listing\",\"rank\":2}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "\u20b9125 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 4057,
            "name": "Bikanervala",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/491\/aa50c08ea5ade50a6d1c2d7aca242a1c_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/491\/aa50c08ea5ade50a6d1c2d7aca242a1c_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.8",
                "rating_text": "3.8",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "8,631",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.5",
                        "reviewCount": "506",
                        "reviewTextSmall": "506 Reviews",
                        "subtext": "506 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.5",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "8,125",
                        "reviewTextSmall": "8,125 Reviews",
                        "subtext": "8,125 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9500 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Connaught Place, New Delhi",
                "address": "1st Floor, Rajiv Gandhi Handicraft Bhavan, Baba Kharak Singh Marg, Connaught Place, New Delhi",
                "localityUrl": "ncr\/connaught-place-delhi-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/mithai\/",
                    "name": "Mithai"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/north-indian\/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/south-indian\/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/street-food\/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/juices\/",
                    "name": "Juices"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/beverages\/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "25 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/ncr\/bikanervala-connaught-place-new-delhi\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/ncr\/bikanervala-connaught-place-new-delhi\/order",
            "clickActionDeeplink": ""
        },
        "distance": "566 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"02b37e8c-010a-42b7-81a1-4549213a9c49\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"4057\",\"element_type\":\"listing\",\"rank\":3}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
];



function RestauRantList() {
    return (
        <div className="restaurant-list">
            {


                dataObject.map((item, index) => (
                    <RestaurantCard data={dataObject[index].info} key={dataObject[index].info.resId} />
                ))

                // dataObject.map((item, index) => {
                //     return (
                //         <RestaurantCard data={dataObject[index].info} key={dataObject[index].info.resId} />
                //     )
                // })


                // dataObject.forEach((item, index) => {
                //     return (
                //         <RestaurantCard data={dataObject[index].info} key={dataObject[index].info.resId} />
                //     )
                // })

                // for(let i = 0; i<dataObject.length; i++){
                //     return{
                // <RestaurantCard data={dataObject[i].info} key={dataObject[i].info.resId} />
                // }}

            }
            {dataObject.map((item, index) => (
                <RestaurantCard data={dataObject[index].info} key={dataObject[index].info.resId} />
            ))}
            {dataObject.map((item, index) => (
                <RestaurantCard data={dataObject[index].info} key={dataObject[index].info.resId} />
            ))}
        </div>
    )

}







function RestaurantCard(props) {
    const { data } = props;
    return (
        <div className="restaurant-card">
            {console.log(data)}
            <img alt={data.name} src={data.image.url} />
            <h2>{data.name}</h2>
            <h3>{[data.cuisine[0].name, data.cuisine[1].name].join(", ")}</h3>
            <h4>{data.locality.name} Stars</h4>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer">
            <h4>2023 &copy; Sachin Arya</h4>
        </div>
    )
}

function AppLayOut() {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />)