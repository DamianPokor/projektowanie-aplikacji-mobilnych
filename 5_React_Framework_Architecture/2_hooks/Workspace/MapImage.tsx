import React from "react";

const MapImage = () => {
    const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/7/71/POLSKA_mapa_woj_z_powiatami.png";

    return (
        <div>
            <h2>Mapa Polski</h2>
            <img
                src={imageUrl}
                alt="Mapa Polski"
                style={{
                    width: "500px",
                    height: "500px",
                    border: "1px solid #ccc",
                }}
            />
        </div>
    );
};

export default MapImage;
