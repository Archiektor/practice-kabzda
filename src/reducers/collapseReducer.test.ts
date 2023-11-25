import {ActionsType, collapseReducer, StateType, testAC, toggleAC} from './collapseReducer';

describe('collapseReducer', () => {
    test('should toggle the collapsed state to true', () => {
        // Arrange
        const initialState: StateType = {
            collapsed: false,
        };
        const action: ActionsType = toggleAC(true);

        // Act
        const newState = collapseReducer(initialState, action);

        // Assert
        expect(newState.collapsed).toBe(true);
    });

    test('should toggle the collapsed state to false', () => {
        // Arrange
        const initialState: StateType = {
            collapsed: true,
        };
        const action: ActionsType = toggleAC(false);

        // Act
        const newState = collapseReducer(initialState, action);

        // Assert
        expect(newState.collapsed).toBe(false);
    });

    test('should return the same state for an unknown action type', () => {
        // Arrange
        const initialState: StateType = {
            collapsed: true,
        };
        const action: ActionsType = testAC();

        // Act
        const newState = collapseReducer(initialState, action);

        // Assert
        expect(newState).toEqual(initialState);
    });
});

describe('toggleAC', () => {
    test('should create a toggle action with the correct type and payload', () => {
        // Arrange
        const value = true;

        // Act
        const action = toggleAC(value);

        // Assert
        expect(action).toEqual({
            type: 'toggle',
            payload: {
                value,
            },
        });
    });
});

describe('testAC', () => {
    test('should create a test action with the correct type and payload', () => {
        // Act
        const action = testAC();

        // Assert
        expect(action).toEqual({
            type: 'unknown',
            payload: {
                value: false,
            },
        });
    });
});