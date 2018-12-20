import _ from "lodash";
const admins = [
  {
    id: 6,
    userId: "1945",
    addedBy: null,
    dealModelId: 2,
    isSuperAdmin: 1,
    isActive: 1
  },
  {
    id: 2,
    userId: "2154",
    addedBy: null,
    dealModelId: 2,
    isSuperAdmin: 1,
    isActive: 1
  }
];

const postReducer = (state = admins, action) => {
  switch (action.type) {
    case "ADD_ADMIN":
      state.push(action.data);
      return state.slice(0, state.length);
    case "DELETE_ADMIN":
      const filtered = state.filter(admin => admin.userId !== action.userId);
      return filtered.slice(0, filtered.length);
    case "EDIT_ADMIN":
      const newState = state.map(function(o) {
        if (o.userId == action.data.actualUserId) {
          return {
            ...o,
            userId: action.data.editedUserId,
            isSuperAdmin: action.data.isSuperAdmin
          };
        } else {
          return o;
        }
      });
      return newState.slice(0, newState.length);
    case "SEARCH_ADMIN":
      const out = state.filter(admin => {
        if (action.userId) {
          if (admin.userId.startsWith(action.userId)) {
            return admin;
          }
        } else {
          return admin;
        }
      });
      return out.slice(0, out.length);
    default:
      return state;
  }
};
export default postReducer;
