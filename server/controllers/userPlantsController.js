// const { default: Plant } = require('../../client/components/Plant/Plant');
// const UserPlants = require('../models/userPlants');
const db = require('../models/index');

const userPlantsController = {};

// create a user plant (on front end, user will click "add" will populate a form)
userPlantsController.createUserPlant = async (req, res, next) => {
  console.log('creating user plant');

  const createUserPlants = await db.UserPlants.create({
    plantNickName: req.body.plantNickName,
    dateAcquired: req.body.dateAcquired,
    status: req.body.status,
    plantId: req.body.plantId,
    wateringFrequency: req.body.wateringFrequency,
    fertilizingFrequency: req.body.fertilizingFrequency,
    userId: req.body.userId,
  });
  if (!createUserPlants) {
    return next({ message: 'Unable to create user plant.' });
  }
  return next();
};

// find all user plants
userPlantsController.getUserPlants = async (req, res, next) => {
  console.log('get user plant info');
  const findAllPlants = await db.UserPlants.findAll({
    where: { userId: req.body.userId },
  });
  if (findAllPlants.length === 0) {
    return next({ message: 'No plants found' });
  }
  res.locals.userPlants = findAllPlants;
  return next();
};

// find a user plant by the plant nickname when user clicks on plant
userPlantsController.getUserPlant = async (req, res, next) => {
  console.log('get user plant info');
  const findSpecificPlant = await db.UserPlants.findAll({
    where: { id: req.params.id },
  });
  if (findSpecificPlant.length === 0) {
    return next({ message: 'Plant not found' });
  }
  res.locals.userPlant = findSpecificPlant;
  return next();
};

// find a user plant by the plant nickname and allow user to update information about the plant
userPlantsController.updateUserPlant = async (req, res, next) => {
  console.log('update user plant info');
  const updateUserPlants = await db.UserPlants.update(
    {
      plantNickname: req.body.plantNickname,
      dateAcquired: req.body.dateAcquired,
      status: req.body.status,
      plantId: req.body.plantId,
      wateringFrequency: req.body.wateringFrequency,
      fertilizingFrequency: req.body.fertilizingFrequency,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  if (updateUserPlants[0] === 0) {
    return next({ message: 'Nothing was updated.' });
  }
  next();
};

module.exports = userPlantsController;
