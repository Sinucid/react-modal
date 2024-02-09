// import { useState } from 'react';
import './App.css';
import { addContent, fetchContent, removeContent, useGetContentQuery } from './store';
import { useAppDispatch, useAppSelector } from './hooks';
import { useState } from 'react';
import { addContentOld } from './store/reducers/old_content';
import { number } from 'prop-types';
// import { Button, Modal } from './components';

type Complete = Record<string, string> & {a: number};

type Aa = Complete & {b: string};
type Bb = Aa & Complete;

type CC = {
  field: string;
}

interface Dd extends CC {
  prop: string;
}

interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}

const as: CallOrConstruct = Date;

new as('aa')

function f1<T>(a: T): string {
  return typeof a;
}

f1(1);

interface A {
  a: number;
}
class Man {
  constructor(public a: number) {}
}

const b = new Man(1);

console.log(b.a)

function ff(...args: number[]): void {
  console.log(Array.prototype.map.call(arguments, (x) => x + 1));
}

function f(n: number): any {
  return function(m?: number): any {
    if (typeof m === 'undefined') {
      return n;
    }

    return f(n + m);
  }
}

const a = {
  bbb: 2
} as any;

Object.setPrototypeOf(a, Array.prototype);

console.log(a.map as any);


class A1 {
  protected a = 1;
}

class B1 extends A1 {
  constructor(){
    super();
    console.log(this.a);
  }
}

function App() {
  const content = useAppSelector((state) => state.content.content)
  const dispatch = useAppDispatch();

  let a: number = 1;
  a = 'a';

  // ff(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  console.log(f(1)(2)(3)());
  // const [open, setOpen] = useState(false);
  // const closeModal = () => {
  //   setOpen(false);
  // };

  // const { data, error, isLoading } = useGetContentQuery(state);

  // console.log(data, error, isLoading);

  const onAdd = () => {
    dispatch(addContent({title: 'Test', description: 'Test description'}));
  }

  const onAddOld = () => {
    dispatch(addContentOld({title: 'Test', description: 'Test description'}));
  }

  const onRemove = (id: string) => {
    dispatch(removeContent({id}));
  }

  const getContent = () => {
    dispatch(fetchContent());
  }

  return (
    <main>
      <button onClick={() => getContent()}>test 2</button>
      <button onClick={() => onAddOld()}>add2</button>

      {/* <button onClick={onAdd}>Add</button> */}
      <button onClick={onAdd}>Add</button>

      {!!content.length && (
        <ul>
          {content.map(({id, title, description}) => (
            <li key={id}>
              <h3>{title} {id}</h3>
              <p>{description}</p>
              <button onClick={() => onRemove(id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {/* <Button onClick={() => setOpen(true)}>Show modal</Button>
      <Modal open={open} header="Title" onClose={closeModal}>
        {Array(2)
          .fill(
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequuntur delectus enim expedita ipsa illum? Tempora facilis vitae dolores aut molestiae voluptas numquam nobis repellendus accusantium laudantium, quisquam amet dolor?',
          )
          .map((text, i) => (
            <p key={i}>{text}</p>
          ))}
      </Modal> */}
    </main>
  );
}

export default App;
