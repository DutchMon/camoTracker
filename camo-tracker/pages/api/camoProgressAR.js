
import { getSession } from "next-auth/react";
import clientPromise, { connectToDatabase } from "../../lib/mongodb";

const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getCamoProgress(req, res)
        }

        case 'POST': {
            return addCamoProgress(req, res)
        }

        case 'PUT': {
            return updateCrop(req, res)
        }

        case 'DELETE': {
            return deleteCrop(req, res)
        }
    }
}

async function getCamoProgress(req, res) {
    const MONGODB_DB = process.env.DB_NAME
    try {
        // connect to the database
        let { db } = await connectToDatabase()

        const session = await getSession({req})

        console.log(`---getSession---`, session)

        let object = JSON.parse(req.body)
        let userId = object.userId



        // fetch progress
        let camoProgress = await db
            .collection('camoProgressAR')
            .findOne({
                "userId": userId
            })

        return res.json({
            message: JSON.parse(JSON.stringify(camoProgress)),
            success: true,
        })
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}

async function addCamoProgress(req, res) {
    try {
        //const session = await getSession({req})

        //console.log('------TESTING------', session.userId)
        //const userId = JSON.parse(session.userId)
        // connect to the database
        let { db } = await connectToDatabase()

        let object = JSON.parse(req.body)
        let userId = object.userId
        //let attachedUser = object.id = userId
        //console.log('---attached----', object)

        await db.collection('camoProgressAR').findOneAndReplace(
            {"userId": userId },
            (object),
            {upsert: true}
        )

        // return a message
        return res.json({
            message: 'Progress Saved',
            success: true,
        })
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false
        })
    }
}

async function deleteCrop(req, res) {
    try {
        // Connecting to the database
        let { db } = await connectToDatabase()

        // Deleting the crop
        await db.collection('crops').deleteMany({
            cropName: req.body
        })

        // returning a message
        return res.json({
            message: 'Crop deleted successfully',
            success: true,
        })
    } catch (error) {

        // returning an error
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}