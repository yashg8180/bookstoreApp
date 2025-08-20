import ContactModel from "../model/contact.model.js";

export const saveContact = async (req, res) => {
    console.log("Received data:", req.body);  // ✅ Debugging request body

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        console.log("Validation failed:", { name, email, message });
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const newContact = new ContactModel({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: "Contact saved successfully!" });
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
