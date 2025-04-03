import { Crop } from "lucide-react";
import { createContext, useState } from "react";

export const CropContext = createContext({
    crop: "",
    setCrop: () => { },
    city: "",
    setCity: () => { }
});

export const CropProvider = ({ children }) => {
    const [crop, setCrop] = useState("");
const [city, setCity] = useState("");
    return <CropContext.Provider value={{ crop, setCrop, city, setCity }}>
        {children}
    </CropContext.Provider>


}