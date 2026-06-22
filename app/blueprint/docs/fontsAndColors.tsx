import { COLORS } from '../../constants/colors'
import { FONTSTACKS } from '../../constants/fonts'

const colorBoxStyle = {
    display: 'inline-block',
    marginRight: 6,
    width: 100,
    height: 60,
    borderRadius: 6,
    border: '2px solid #999',
};

const fontsColors = <>
    <h2>Font list</h2>
    {FONTSTACKS.map(({ name, stack, defaultSize }) => {
        return <div key={name} style={{ margin: 15 }}>
            {name}: <span style={{ fontFamily: stack, fontSize: defaultSize }}>&quot;The quick &amp; brown fox jumps over the lazy dog.&quot;</span>
        </div>
    })}
    <br/>
    <h2>Color palette</h2>
    {COLORS.map((color) => {
        return <div key={color} style={{ backgroundColor: color, ...colorBoxStyle }}></div>
    })}
</>;

export default fontsColors;
