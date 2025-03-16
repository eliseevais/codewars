module.exports = function createMeeting(config) {
  const { meetings, params } = config;
  const { from, to, persons } = params;

  const isConflict = (existingMeeting) => {
    return from < existingMeeting.to && to > existingMeeting.from;
  };

  let conflictingPersons = [];

  for (const person of persons) {
    for (const meeting of meetings) {
      if (meeting.person === person && isConflict(meeting)) {
        conflictingPersons.push(person);
        break;
      }
    }
  }

  if (conflictingPersons.length > 0) {
    conflictingPersons = conflictingPersons.sort();
    return {
      status: 'REJECTED',
      reason: conflictingPersons
    };
  }

  return {
    status: 'CREATED',
    reason: null
  };
}
