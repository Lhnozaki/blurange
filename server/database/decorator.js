const Edu = require('./models/Edu');
const Interest = require('./models/Interest');
const Project = require('./models/Project');
const Skill = require('./models/Skill');
const User = require('./models/User');
const Work = require('./models/Work');

module.exports = function(req, res, next) {
  req.db = {
    Edu: Edu,
    Interest: Interest,
    Project: Project,
    Skill: Skill,
    User: User,
    Work: Work
  };
  next();
};
