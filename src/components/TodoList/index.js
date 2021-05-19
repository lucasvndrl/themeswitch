import { useTheme, themes } from '../../styles/themes/context'

const TodoList = () => {
    const { theme, setTheme } = useTheme();
    return(
        <div style={{
            background: theme.colors.back,
            color: theme.colors.text
        }}>
            <ul>
                <li>Fazer café</li>
                <li>Codar</li>
                <li>Botar Arctic Monkeys no talo</li>
            </ul>

            <hr />

            <button
            onClick={() =>
            setTheme(theme === themes.light ? themes.dark : themes.light)
            }
            >Switch Theme</button>
        </div>
        
    )
}


export default TodoList;