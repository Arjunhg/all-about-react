# Redux State Management Guidelines

## Core Principle
Redux relies heavily on functional programming concepts, particularly the principle of immutable state management.

## State Update Rules
- ❌ **Never** directly modify (mutate) and reassign state in Redux
- ✅ **Always** return a new state object from reducers
- ✅ Use immutable update patterns (spread operator, etc.)

## Examples

### Incorrect Approach (Not Redux-Friendly)
❌ Direct Assignment (Not Allowed in Redux)
```javascript
state = { count: state.count + 1 }; // ❌ Don't reassign state in Redux
```
❌ Mutating State Directly (Breaks Immutability)
```javascript
state.count++; // ❌ Directly modifying state is not allowed
state.items.push(newItem); // ❌ Mutating an array directly is not allowed
```

### Correct Approach (Redux-Friendly)
✅ Doesn't update or reassign original state. Instead, returns a new state object
```javascript
return { ...state, count: state.count + 1 }; // ✅ Return new state object
```

## Key Differences Table

| Aspect | Direct Assignment | Redux Reducer Pattern |
|--------|------------------|----------------------|
| Syntax | `state = { count: state.count + 1 }` | `return { ...state, count: state.count + 1 }` |
| Redux Compatibility | ❌ Not compatible | ✅ Fully compatible |
| Immutability | ✅ Creates new reference | ✅ Creates new reference |
| Usage Context | Local state management | Redux reducers |

## Important Notes
1. Both methods technically create new objects
2. Redux specifically requires explicit return of new state
3. Spread operator (`...state`) is the preferred method for immutable updates