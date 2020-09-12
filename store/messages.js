const messages = [
  /*{
    fromUserId: 2,
    toUserId: 1,
    listingId: 1,
    content: "hi there",
    id: 1,
    dateTime: 1586044521956
  },*/
  
];

const getMessagesForUser = toUserId =>
  messages.filter(message => message.toUserId === toUserId);

const add = message => {
  message.id = messages.length + 1;
  message.dateTime = Date.now();
  messages.push(message);
};

module.exports = { add, getMessagesForUser };
