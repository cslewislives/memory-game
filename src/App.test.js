import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("addAlert", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.addAlert("To force deletion of the LAG use delete_force: True")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.addAlert("\n\nThe first error message:\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.addAlert("Exception not raised: %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.addAlert("Unknown error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.addAlert("No os dependencies found. ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.addAlert(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
