# Dev Assumptions

- I went with a really basic approach here. The requirements only stated that
  "Design a REST or GraphQL API that allows retrieving the following properties for a patient:"
  Where I made the assumption that "properties" meant answers to the questions.
- There was no guidance in terms of shape of the output so I went to a simple
  approach of returning an array of answers matching the shape of the entity.
- As this was a simple API, I used a simple route structure to get the answers 
  for a particular questionnaire, as this was where the datetime was stored.
- I could have gone for GraphQL but I thought that would be overkill for this
  simple API.
- I hope you don't mind but I went with using Nest.js. I prefer their approach
  to building APIs and I think it's a great framework. Also out-the-box DI makes it 
  easy to test.

## Dev Starting Node.js

- `yarn start:dev`

## Dev Run Tests

- `yarn test`

## Getting Started

### Requirements

- Git
- Node
- Yarn or npm

### Running the app

```
npm i && npm run start
```

### Running the tests

```
npm i && npm run test
```

## Context

At Eucalyptus we gather information from our patients in the form of answers to questionnaires. Often a patient will answer multiple questionnaires over their time with Eucalyptus, with overlap in the questions asked.

Recently engineers within Eucalyptus have expressed that they have found it complicated to utilise this data in its current format, and so we're looking at providing a simplified interface.

### Data Model

![](./db_schema.svg)

## Requirements

- Design a REST or GraphQL API that allows retrieving the following properties for a patient:
  - Date of birth
  - First name
  - Last name
  - Allergies
  - Medications
- Integrate the API with the SQLite database in `./questionnaire.db`
- Handle multiple answers from the same patient for the same question on different dates
  - This requirement is purposefully vague, as we are curious to see how you approach this task, and what assumptions you choose to make

## Tips

We'll be looking for:

- A well-defined and extensible API schema.
- A well-designed and secure implementation.
- Production quality code.
- Clearly communicated assumptions.
- Useful and well structured tests.
- A functionally correct solution (we'll be running some tests using the sample data).
