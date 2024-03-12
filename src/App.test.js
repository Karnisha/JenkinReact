import { fireEvent, render, screen } from '@testing-library/react';//screen-document
import App from './App';


// describe('My Test Suite',()=>{
//   test('Test Case-1',()=>{
//     render(<App/>);
//     //var text1=screen.getByText('Welcome to jest');
//     var element=screen.getByTestId("MyHeading");
//     expect(element).toBeInTheDocument();
//     expect(element).toHaveTextContent("Welcome to jest");
//    // expect(element).toBe("Welcome to");
//  });
//   it('Test Case-2',()=>{
//    render(<App/>);
//    const text2=screen.getByText('Hello world');
//    expect(text2).toBeInTheDocument();
//  });

// });

describe('My Caluculate Test Suite',() =>{
  test("Test Case-1[Render all UI",()=>{
    render(<App/>);
     var textBox1=screen.getByTestId("TextBox1");
     var textBox2=screen.getByTestId("TextBox2");
     var additionButton=screen.getByTestId("AdditionButton");

     expect(textBox1).toBeInTheDocument();
     expect(textBox2).toBeInTheDocument();
     expect(additionButton).toBeInTheDocument();
  });

  test('Test Case-2[Render All Labels and Text Message', () =>{
    render(<App/>);
    const heading=screen.getByTestId("Heading");
    const Label1=screen.getByTestId("Label1");
    const Label2=screen.getByTestId("Label2");
    const Result=screen.getByTestId("Result");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Addition of Two Numbers");

    expect(Label1).toBeInTheDocument();
    expect(Label1).toHaveTextContent("Enter No 1");

    expect(Label2).toBeInTheDocument();
    expect(Label2).toHaveTextContent("Enter No 2");

    expect(Result).toBeInTheDocument();
    expect(Result).toHaveTextContent("Sum :");

    });

    test('Test Case-3[Testing Textboxes Initial Value]',() =>{
      render(<App/>);
      const textBox1=screen.getByTestId("TextBox1");
      const textBox2=screen.getByTestId("TextBox2");
      expect(textBox1).toHaveTextContent('');
      expect(textBox2).toHaveTextContent('');
    });

    test('Test Case-4[Testing Empty or Blank Input]',()=>{
      render(<App/>);
      const additionButton=screen.getByTestId("AdditionButton");

      fireEvent.click(additionButton);

      const result=screen.getByTestId("Result");
      expect(result).toHaveTextContent("Sum :NaN");
    });
    test('Test Case-5[Testing Success Result]',()=>{
      render(<App/>)
      const textBox1=screen.getByTestId("TextBox1");
      const textBox2=screen.getByTestId("TextBox2");
      const additionButton=screen.getByTestId("AdditionButton");

      fireEvent.change(textBox1,{target :{value : 10 } } );
      fireEvent.change(textBox2,{target :{value : 20} } );

      fireEvent.click(additionButton);
     
      const result=screen.getByTestId("Result");
      expect(result).toHaveTextContent("Sum :30");

    });
});