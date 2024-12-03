const API_URL = "http://127.0.0.1:8000/api";

export const adminsignup = async (data) => {
    const response = await fetch(`${API_URL}/adminsignup/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return await response.json();
};


export const adminsignin = async (data) => {
    const response = await fetch(`${API_URL}/adminsignin/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return await response.json();
};
