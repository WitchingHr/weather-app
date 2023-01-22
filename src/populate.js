import pubsub from './pubsub';

function populate(data) {
  console.log(data);
}

pubsub.subscribe('Data', (data) => {
  populate(data);
});

console.log('populate'); // DELETE ME
