<h1 align="center">URLShort</h1>
<p align="center">The URLshort is an React-Native app, whose function is to shorten url's, using custom names. The API used for this was the Cuttly.</p>

<p align="center"><img src="src/assets/urlshort-index.png"></p>

Summary
=================
<!--ts-->
   * [Start](#start)
   * [Dependencies](#dependencies)
   * [Installing Chocolatey](#chocolatey)
   * [Installing Node.js, Python, JDK 8 and Yarn, using Chocolatey](#others)
   * [Installing Android Studio and JDK](#android)
   * [Setting the environment variables](#environment)
   * [Installing npm (Node Package Manager)](#npm)
   * [Initializing npm](#init)
<!--te-->

<h2 id="start">How to get started ?</h2>
<ul><li><p>After you clone or download the repository, you need to install some dependencies to prepare your environment to use React Native</p></li></ul>

<h2 id="dependencies">Installing the dependencies</h2>
<ul><li><p>To get started, you need to install the 6 main dependencies:</p></li></ul>

<!--ts-->
   * [Chocolatey](#chocolatey)
   * [Python](#others)
   * [Yarn](#others)
   * [Node.js](#others)
   * [JDK 8](#android)
   * [Android Studio](#android)
<!--te-->

<h3 id="chocolatey">Installing Chocolatey</h3>
<ul><li><p>Open cmd or PowerShell inside the project folder and run the following commands:</p></li></ul>

<pre><code>Get-ExecutionPolicy</code></pre>
<pre><code>Set-ExecutionPolicy AllSigned</code></pre>
<pre><code>Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))</code></pre>

<ul><li><p>You can verify that the installation was successful with the following command:</p></li></ul>

<pre><code>choco</code></pre>

<h3 id="others">Installing Node.js, Python, JDK 8 and Yarn, using Chocolatey</h3>
<ul><li>Still inside the project folder, enter the following command in cmd or PowerShell:</li></ul>

<pre><code>choco install -y nodejs-lts yarn python2 jdk8</code></pre>

<h3 id="android">Installing Android Studio</h3>

<ul><li>When installing Android Studio on your computer, you already install the JDK (Java Development Kit)</li></ul>
<ul><li>Go to the official Android Studio website to perform the installation=> https://developer.android.com/studio</li></ul>

<h3 id="environment">Setting the environment variables</h3>
<ul><li><p>After completing the installation of Android Studio and the JDK, you will access the environment variables panel on your computer and configure the JDK path, usually located at => C: \ Users \ YourUser \ AppData \ Local \ Android \ Sdk</p></li></ul>

<h3 id="npm">Installing npm (Node Package Manager)</h3>
<ul><li>Within your project folder, run the following command using cmd or PowerShell:</li></ul>

<pre><code>npm install</code></pre>

<h3 id="init">Initializing npm</h3>
<ul><li>After installing npm, you will start it using the following command:</li></ul>

<pre><code>npm start</code></pre>

<ul><li>Open another cmd tab in parallel and execute the command:</li></ul>

<pre><code>npx react-native run-android</code></pre>

<h4>Wonderful ! You have your environment ready to use React Native. Have a good time.</h4>
