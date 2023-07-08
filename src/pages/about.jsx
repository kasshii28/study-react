import Head from 'next/head'
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useCounter } from 'src/hooks/useCounter';
import { useInputArray } from 'src/hooks/useInputArray';
import { useBgLightBlue } from 'src/hooks/useBgLightBlue';

export default function Home() {
  const {count ,isShow,handleClick,handleDisplay} = useCounter();
  const {text,array,handleChange,handleAdd} = useInputArray();
  useBgLightBlue();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      {/* カウント */}
      {isShow ?<h1>{count}</h1>:null}
      <button onClick={handleClick}>ボタン</button>

      {/* 入力テキスト追加 */}
      <button onClick={handleDisplay}>{isShow ? "非表示": "表示"}</button>
      <input type="text" value={text} onChange={handleChange}/>
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item)=>{
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>

      <Main page="about"/>

      <Footer/>
    </>
  );
}
