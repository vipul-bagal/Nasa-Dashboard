const { existsLaunch,
    getAllLaunches,
    addNewLauch,
    abortLaunchById,
        } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    // Array.from(launches.values())
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;

    if (!launch.launchDate || !launch.mission || !launch.rocket || !launch.target) {
        return res.status(400).json({
            error: 'Missing required launch property',
        });
    }

    // launch.launchDate += ' GMT'; 
    console.log(launch.launchDate);

    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid launch date',
        });
    }

    addNewLauch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id);
    console.log(launchId);
    if (!existsLaunch(launchId)) {
        console.log('error');
        return res.status(404).json({
            error: 'Launch not found!',
        });
    }

    const aborted = abortLaunchById(launchId);
    return res.status(200).json(aborted);

}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
}