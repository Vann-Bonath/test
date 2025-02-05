const oldRecord = {
  name: "bonath",
  hero: "alukak",
  address: {
    currentAddress: "phnom penh",
    familyMember: {
      name: ["vanntha", "darong"],
    },
  },
};

const newRecord = {
  name: "BonathUnfake",
  hero: "alucard",
  address: {
    currentAddress: "USA",
    familyMember: {
      name: ["vanntha", "darong"],
      quote: "one piece is real",
    },
  },
};

function compareNestedObject(oldRecord: any, newRecord: any) {
  let oldRecordValue = {};
  let newRecordValue = {};
  let changedValue = {};

  Object.keys(newRecord).forEach((key) => {
    newRecordValue = newRecord[key];
    oldRecordValue = oldRecord[key];

    if (
      oldRecordValue !== newRecordValue &&
      typeof newRecordValue !== "object"
    ) {
      changedValue[key] = newRecordValue;
    }

    if (typeof newRecordValue === "object" && newRecordValue !== null) {
      const nestedChanges = compareNestedObject(
        oldRecordValue || {},
        newRecordValue
      );
      console.log("nestedChanges 123:", nestedChanges);
      if (Object.keys(nestedChanges).length > 0) {
        changedValue[key] = nestedChanges;
        console.log("nestedChanges:", nestedChanges);
        console.log("length:", Object.keys(nestedChanges).length);
      }
    }
  });
  return changedValue;
}

console.log(compareNestedObject(oldRecord, newRecord));
