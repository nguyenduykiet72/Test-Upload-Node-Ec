const user = [
  { name: "John Doe", email: "john.doe@example.com" },
  { name: "Jane Doe", email: "jane.doe@example.com" },
  { name: "Jim Doe", email: "jim.doe@example.com" },
];

exports.getUsers = (req, res, next) => {
  res.status(200).json({
    users: user,
  });
};
