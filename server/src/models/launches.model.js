const launches = new Map();

const launch = {
    flightNumber: 100,
    misssion: 'Kepler Exploration X',
    rocekt: 'Dora IS1',
    launchDate: new Date('December 22, 2024'),
    target: 'Dholakpur',
    customer: ['MSX', 'Bitwise'],
    upcoming: true,
    success: true,
};
let latestFlightNumber = launch.flightNumber;

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLauch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber,
        Object.assign(
            launch, {
                success: true,
                upcoming: true,
                customers: ['ZTM', 'NASA'],
                flightNumber: latestFlightNumber,
        })
    )
}

function existsLaunch(launchId) {
    return launches.has(launchId);
}

function abortLaunchById(launchId) {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    console.log('success');
    return aborted;
}

module.exports = {
    existsLaunch,
    getAllLaunches,
    addNewLauch,
    abortLaunchById,
}