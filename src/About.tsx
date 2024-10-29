import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>歡迎來到小楷的網站！</h1>
      <h2>這裡我將會自我介紹一下。</h2>

      <table>
        <thead>
          <tr>
            <th>名稱</th>
            <th>-</th>
            <th>年齡</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>王楷澔</td>
            <td>-</td>
            <td>21</td>
          </tr>
        </tbody>
      </table>

      <p>系級: 資管四A</p>
      <p>學號: 410630015</p>

      <h1>我的照片</h1>
      <img src="mee.jpg" alt="照片" className="photo" />
      <p>背景是在大稻埕！</p>

      <div className="hobbies">
        <strong>興趣:</strong>
        <em>打球，打遊戲，到處吃美食</em>
      </div>

      <h1>我很喜歡吃的東西</h1>
      <ul>
        <li>芒果</li>
        <li>冰淇淋</li>
        <li>牛肉麵</li>
      </ul>
    </div>
  );
};

export default About;
