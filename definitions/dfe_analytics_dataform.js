const dfeAnalyticsDataform = require("dfe-analytics-dataform");

dfeAnalyticsDataform({
  eventSourceName: "get-an-identity",
  bqProjectName: "get-an-identity",
  bqDatasetName: "identity_events_prod",
  bqEventsTableName: "events",
  urlRegex: "teaching-identity.education.gov.uk",
  transformEntityEvents: false,
  dataSchema: []
});