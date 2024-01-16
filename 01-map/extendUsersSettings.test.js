import extendUsersSettings from "./extendUsersSettings";

describe("extendUsersSettings", () => {
  test("extends user properties with 'id' and 'isEnabled'", () => {
    const USERS = [
      {
        email: "lindsay.ferguson@reqres.in",
        firstName: "Lindsay",
        lastName: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        email: "michael.lawson@reqres.in",
        firstName: "Michael",
        lastName: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        email: "tobias.funke@reqres.in",
        firstName: "Tobias",
        lastName: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
    ];

    const EXPECTED_RESULT = [
      {
        email: "lindsay.ferguson@reqres.in",
        firstName: "Lindsay",
        lastName: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        id: 0,
        isEnabled: true,
      },
      {
        email: "michael.lawson@reqres.in",
        firstName: "Michael",
        lastName: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        id: 1,
        isEnabled: true,
      },
      {
        email: "tobias.funke@reqres.in",
        firstName: "Tobias",
        lastName: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
        id: 2,
        isEnabled: true,
      },
    ];

    const result = extendUsersSettings(USERS);

    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });
});
