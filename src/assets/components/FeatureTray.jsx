import React from 'react';
import FeatureCard from './FeatureCard';

function FeatureTray() {
  return (
    <div className="h-fit w-screen  p-2 flex gap-2 overflow-x-scroll  opacity-60 justify-evenly">
      <FeatureCard title="SFX Inventory" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur asperiores unde corporis nesciunt quibusdam sint dignissimos eaque aspernatur ullam." img="https://img.freepik.com/free-vector/vintage-bearded-viking-skull_225004-1936.jpg?t=st=1730105458~exp=1730109058~hmac=277100a39a0504d0ae4d8f2702859be85ad9aa1c39585e745ec12369387aae9e&w=1060"/>
     
      <FeatureCard title="Classic BGMs" desc="      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quos temporibus officia beatae odit harum totam nobis, architecto necessitatibus ea." img="https://img.freepik.com/free-vector/scandinavian-viking-skull-horned-helmet_225004-1933.jpg?t=st=1730105939~exp=1730109539~hmac=24953254a2fcf1647bbf52e4b941974bc2dc7b357de8cfd289b5894392a21195&w=1060"/>

      <FeatureCard title="Hard Traps " desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quos temporibus officia beatae odit harum totam nobis, architecto necessitatibus ea. This is how you get" img="https://img.freepik.com/free-vector/vintage-monochrome-viking-skull-without-jaw_225004-1939.jpg?t=st=1730106030~exp=1730109630~hmac=790f921d57c2074a2e2235839bbb9740d0af2bc2c7d2a1f8762e545cc2e50c86&w=1060" />
      <FeatureCard title="Melodies" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quos temporibus officia beatae odit harum totam nobis, architecto necessitatibus ea." img ="https://img.freepik.com/free-vector/viking-skull-helmet-with-horns_225004-1943.jpg?t=st=1730106212~exp=1730109812~hmac=6b914c2313c9db055ad40d60b346421aee52e678cbee3ff3ef9ac0d1894045da&w=1060"/>

    </div>
  );
}

export default FeatureTray;
