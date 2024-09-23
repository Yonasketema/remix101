import cassandra from "cassandra-driver";

const contactPoints = ["172.17.0.2"];
//  [String(process.env.REACT_APP_CONTACT_POINTS)]
const keyspace = "posts";
// String(process.env.REACT_APP_KEYSPACE)
const contactPassword = "";
// String(process.env.REACT_APP_CASSANDRA_PASSWORD)
const contactUsername = "";
// String(process.env.REACT_APP_CASSANDRA_USERNAME)
const contactPort = 9042;
// parseInt(String(process.env.REACT_APP_CASSANDRA_PORT))

export const client = new cassandra.Client({
  contactPoints,
  keyspace,
  localDataCenter: "datacenter1",
  credentials: { username: contactUsername, password: contactPassword },
  protocolOptions: { port: contactPort },
});

// client.connect((err) => {
//   if (err) {
//     console.error("Error connecting to Cassandra:", err);
//   } else {
//     console.log("Connected to Cassandra");
//   }
// });

// const results = await client.execute("SELECT * FROM system.clients LIMIT 10");

// results.rows.forEach((row) => console.log(JSON.stringify(row)));

// await client.shutdown();

export default client;
