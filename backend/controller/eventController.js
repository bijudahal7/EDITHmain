import mongoose from "mongoose";

import {Event} from "../modules/eventModel.js"

// Create Event Controller
export const createEventController = async (req, res) => {
  try {
    const { name, description, location ,photo} = req.body;

    // Validate request data
    if (!name || !description || !location) {
      return res.status(400).json({ error: "All fields are mandatory." });
    }
     // Check if a file was uploaded
     let photouri = null;
     if (req.file) {
       // Assuming that you have a 'public' directory to serve static files
       photo = `public/${req.file.filename}`;
     }
 
     // Create a new event with the photo URL
     const newEvent = await Event.create({
       name,
       description,
       location,
       photo,
     });

    return res.status(201).json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    console.error("Error creating event:", error);
    return res.status(500).json({ error: "Something went wrong while creating the event." });
  }
};

// Get Event Controller
export const getEventController = async (req, res) => {
  try {
    // Retrieve all events from the database
    const events = await Event.find();

    return res.status(200).json({ events });
  } catch (error) {
    console.error("Error retrieving events:", error);
    return res.status(500).json({ error: "Something went wrong while retrieving events." });
  }
};
