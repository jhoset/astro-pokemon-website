import {type Component, createSignal, type JSX} from "solid-js";

interface Props {
    initialValue: number;
    children?: JSX.Element;
}


export const Counter: Component<Props> = (props) => {

    const [counter, setCounter] = createSignal(props.initialValue);


    return (
        <>
            {/*<h1 class="text-5xl">Counter</h1>*/}
            {
                props.children
            }
            <h3> Value: {counter()} </h3>

            <button onClick={() => setCounter((value) => value + 1)} class="bg-blue-500 p-2 rounded-md mr-2">+1</button>
            <button onClick={() => setCounter((value) => value - 1)} class="bg-blue-500 p-2 rounded-md mr-2">-1</button>
        </>
    )
}