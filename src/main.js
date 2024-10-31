import './style.css';
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Home from "@arcgis/core/widgets/Home";
import Extent from "@arcgis/core/geometry/Extent";
import Color from "@arcgis/core/Color";
import Legend from "@arcgis/core/widgets/Legend";
import Expand from "@arcgis/core/widgets/Expand";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import TimeSlider from "@arcgis/core/widgets/TimeSlider";
import Search from "@arcgis/core/widgets/Search";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";


// Create a WebMap instance 
const webmap = new WebMap({
    portalItem: { id: "5c0750cd17e548b28fe3eb75e29b0a2c" }
});

// Extent for Tallinn
const tallinnExtent = new Extent({
    xmin: 24.35,
    ymin: 59.30,
    xmax: 25.05,
    ymax: 59.70,
    spatialReference: { wkid: 4326 }
});

// Create a MapView
const view = new MapView({
    container: "viewDiv",
    map: webmap,
    center: [24.7436, 59.425],
    zoom: 11,
    constraints: {
        geometry: tallinnExtent,
        minZoom: 9,
        maxZoom: 20
    }
});

// Home widget
const homeBtn = new Home({
    view: view
  });
  
  // Add the Home button to the view
view.ui.add(homeBtn, "top-left"); 


// CSS classes for each construction periods and colors update
const yearClasses = {
    "1230-1709": "period-1230-1709",
    "1710-1917": "period-1710-1917",
    "1918-1939": "period-1918-1939",
    "1940-1970": "period-1940-1970",
    "1971-1990": "period-1971-1990",
    "1991-2003": "period-1991-2003",
    "2004-2024": "period-2004-2024"
};

// Get color from CSS class
const getColorFromClass = (cssClass) => {
    const element = document.createElement('div');
    element.className = cssClass;
    document.body.appendChild(element);
    const color = window.getComputedStyle(element).backgroundColor;
    document.body.removeChild(element);
    return Color.fromRgb(color);
};

// Update layer styles with unique value renderer for classified colors
const updateLayerStyles = (layer) => {
    layer.renderer = {
        type: "unique-value",
        field: "year_period",
        uniqueValueInfos: Object.keys(yearClasses).map(period => ({
            value: period,
            symbol: {
                type: "simple-fill",
                color: getColorFromClass(yearClasses[period]),
                outline: {
                    color: [255, 255, 255, 0.5],
                    width: 0
                }
            }
        }))
    };
};


// Define arcade script for the popup chart
const buildingChartScript = `
var districtName = $feature.district_name; 
return {
    type: 'media',
    attributes: {
        "1230-1709": Number($feature.p1),
        "1710-1917": Number($feature.p2), 
        "1918-1939": Number($feature.p3), 
        "1940-1970": Number($feature.p4), 
        "1971-1990": Number($feature.p5), 
        "1991-2003": Number($feature.p6),
        "2004-2024": Number($feature.p7) 
    },
    mediaInfos: [{
        type: 'columnchart',
        title: 'Total number of buildings by construction period in <strong>' + districtName + '</strong>', 
        value: {
            fields: [
                "1230-1709", // 1230-1709
                "1710-1917", // 1710-1917
                "1918-1939", // 1918-1939
                "1940-1970", // 1940-1970
                "1971-1990", // 1971-1990
                "1991-2003", // 1991-2003
                "2004-2024"  // 2004-2024
            ],
            colors: [
                [201, 249, 255, 255],
                [51, 169, 243, 255], 
                [26, 86, 252, 255], 
                [165, 30, 113, 255], 
                [204, 41, 41, 255], 
                [219, 128, 0, 255], 
                [248, 209, 79, 255] 
            ]
        }
    }],
    content: [
        {
            type: 'text',
            text: '<b>' + districtName + '</b>' 
        }
    ]
};
`;

// Setting up popup templates
const setupPopupTemplates = (layer) => {
    switch (layer.title) {
        case "tallinn_buildings_age":
            layer.popupTemplate = new PopupTemplate({
                title: "<b>Building Info</b>",
                content: `
                    <div>
                        <b>Address:</b> {address}<br><br>
                        <b>Year Built:</b> {year}
                    </div>
                `
            });
            break;

        case "tallinn_districts":
            layer.popupTemplate = new PopupTemplate({
                title: "<b>District Info</b>",
                content: [
                    {
                        type: "expression",
                        expressionInfo: {
                            expression: buildingChartScript
                        }
                    }
                ]
            });
            break;

        default:
            layer.popupTemplate = new PopupTemplate({
                title: "<b>Information</b>",
                content: "Details about this feature will be displayed here."
            });
            break;
    }
};


// Time slider setting up
const timeSlider = new TimeSlider({
    view: view,
    fullTimeExtent: {
        start: new Date(1230, 0, 1),
        end: new Date(2024, 0, 1)
    },
    timeExtent: {
        start: new Date(1230, 0, 1),
        end: new Date(2024, 0, 1)
    },
    stops: {
        interval: {
            value: 1,
            unit: "years"
        }
    },
});


// Adding the time slider to the view
view.ui.add(timeSlider, {
    position: "bottom-right",
    index: 0,

});

// Bookmarks setting up
const bookmarks = new Bookmarks({
    view: view,
    bookmarks: [
        {
            name: "Late Middle and Early Modern Ages (1230-1709)",
            viewpoint: {
                targetGeometry: new Extent({
                    xmin: 24.71,
                    ymin: 59.41,
                    xmax: 24.78,
                    ymax: 59.46,
                    spatialReference: { wkid: 4326 }
                }),
                scale: 23000
            },
            yearRange: [1230, 1709]
        },
        {
            name: "Estonia in the Russian Empire (1710-1917)",
            viewpoint: {
                targetGeometry: new Extent({
                    xmin: 24.71,
                    ymin: 59.39,
                    xmax: 24.78,
                    ymax: 59.46,
                    spatialReference: { wkid: 4326 }
                }),
                scale: 76000,
            },
            yearRange: [1710, 1917]
        },
        {
            name: "Independent Estonia (1918-1939)",
            viewpoint: {
                targetGeometry: new Extent({
                    xmin: 24.71,
                    ymin: 59.39,
                    xmax: 24.78,
                    ymax: 59.46,
                    spatialReference: { wkid: 4326 }
                }),
                scale: 76000,
            },
            yearRange: [1918, 1939]
        },
        {
            name: "Soviet Union I (1940-1970)",
            viewpoint: {
                targetGeometry: new Extent({
                    xmin: 24.71,
                    ymin: 59.39,
                    xmax: 24.78,
                    ymax: 59.46,
                    spatialReference: { wkid: 4326 }
                }),
                scale: 76000,
            },
            yearRange: [1940, 1970]
        },
        {
            name: "Soviet Union II (1971-1990)",
            viewpoint: {
                targetGeometry: new Extent({
                    xmin: 24.71,
                    ymin: 59.39,
                    xmax: 24.78,
                    ymax: 59.46,
                    spatialReference: { wkid: 4326 }
                }),
                scale: 76000,
            },
            yearRange: [1971, 1990]
        },
        {
            name: "Restoration of Independence (1991-2003)",
            viewpoint: {
                targetGeometry: new Extent({
                    xmin: 24.71,
                    ymin: 59.39,
                    xmax: 24.78,
                    ymax: 59.46,
                    spatialReference: { wkid: 4326 }
                }),
                scale: 76000,
            },
            yearRange: [1991, 2003]
        },
        {
            name: "Estonia in the EU (2004-)",
            viewpoint: {
                targetGeometry: new Extent({
                    xmin: 24.71,
                    ymin: 59.39,
                    xmax: 24.78,
                    ymax: 59.46,
                    spatialReference: { wkid: 4326 }
                }),
                scale: 76000,
            },
            yearRange: [2004, 2024]
        }
    ]
});

// Adding bookmarks widget (with expand) to the view
view.ui.add(new Expand({
    content: bookmarks,
    expanded: false
}),
    "top-left"
);


// Checking if layers exist, updating the layer styles and adding legend and search widgets
view.when(() => {
    const buildingsLayer = webmap.layers.find(l => l.title === "tallinn_buildings_age");
    const districtsLayer = webmap.layers.find(l => l.title === "tallinn_districts");

    if (buildingsLayer) {
        buildingsLayer.outFields = ["*"];
        updateLayerStyles(buildingsLayer);

        //legend widget
        const legend = new Legend({
            view: view,
            layerInfos: [{
                layer: buildingsLayer,
                title: "Construction Periods"
            },
            {
                layer: districtsLayer,
                title: "District Boundaries"
            }]
        });

        // Adding legend to the view
        view.ui.add(legend, "bottom-left");


        /// search widget
        const searchWidget = new Search({
            view: view,
            includeDefaultSources: false,
            sources: [{
                layer: buildingsLayer,
                searchFields: ["address"],
                displayField: "address",
                exactMatch: false,
                outFields: ["*"],
                name: "Buildings",
                placeholder: "Find building by address"
            }]
        });

        // Add the search widget
        view.ui.add(searchWidget, {
            position: "top-right",
            index: 0
        });
    }

    if (districtsLayer) {
        // Tallinn districts symbols
        let symbol = {
            type: "simple-fill",
            color: [227, 227, 227, 0],
            style: "solid",
            outline: {
                color: [227, 227, 227, 0.8],
                width: 0.2
            }
        };

        // Apply the symbol to the layer renderer
        districtsLayer.renderer = {
            type: "simple",
            symbol: symbol
        };
    }
});


// Setting up the popups after layers loaded
webmap.when(() => {
    webmap.layers.forEach(setupPopupTemplates);

    view.on("click", (event) => {
        view.hitTest(event).then((response) => {
            const result = response.results.find(result =>
                result.graphic && result.graphic.layer &&
                (result.graphic.layer.title === "tallinn_buildings_age" ||
                    result.graphic.layer.title === "tallinn_districts")
            );

            if (result && result.graphic) {
                const layer = result.graphic.layer;

                view.popup.open({
                    title: layer.popupTemplate.title,
                    content: layer.popupTemplate.content,
                    location: event.mapPoint
                });
            }
        }).catch(error => {
            console.error("Error during hit test:", error);
        });
    });
});

// Quering features based on the updated definition expression
async function queryFeatures(layer) {
    try {
        const result = await layer.queryFeatures();
    } catch (error) {
        console.error("Error querying features:", error);
    }
}

// Updating layers definition expression based on the current year
function updateDefinitionExpression() {
    const layer = webmap.layers.find(l => l.title === "tallinn_buildings_age");
    if (layer) {
        const startYear = timeSlider.timeExtent.start.getFullYear();
        const endYear = timeSlider.timeExtent.end.getFullYear();

        // Update the definition expression for the layer
        layer.definitionExpression = `year >= ${startYear} AND year <= ${endYear}`;

        queryFeatures(layer);
    }
}

// Debounce function to improve features updating
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Updating the definition expression with debounce
const debouncedUpdateDefinitionExpression = debounce(updateDefinitionExpression, 200);

// Watch for changes to the time extent and call the debounced function
reactiveUtils.watch(() => timeSlider.timeExtent, () => {
    debouncedUpdateDefinitionExpression();
});


// Listen for bookmark selection and update definition expression
view.when(() => {
    const layer = webmap.layers.find(l => l.title === "tallinn_buildings_age");
    if (layer) {
        layer.when(() => {
            bookmarks.on("bookmark-select", (event) => {
                const selectedYearRange = event.bookmark.yearRange;
                const [startYear, endYear] = selectedYearRange;

                // Update the time slider to match the selected bookmark's range
                timeSlider.timeExtent = {
                    start: new Date(startYear, 0, 1),
                    end: new Date(endYear, 0, 1)
                };

                // Update the layer's definition expression based on bookmark selection
                layer.definitionExpression = `year >= ${startYear} AND year <= ${endYear}`;
            });

            // Create a clear button to reset the filter
            const clearBtn = document.createElement("button");
            clearBtn.innerHTML = "Reset Filters";
            clearBtn.classList.add("clear-filter-btn");
            clearBtn.addEventListener("click", () => {
                layer.definitionExpression = null;

                // Reset the time slider to the full time extent
                timeSlider.timeExtent = {
                    start: new Date(1230, 0, 1),
                    end: new Date(2024, 0, 1)
                };

                updateDefinitionExpression();
            });
            document.body.appendChild(clearBtn);
        });
    } else {
        console.error("Layer 'tallinn_buildings_age' not found.");
    }
});