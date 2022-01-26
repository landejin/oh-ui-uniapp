import DragContainer from "./components/oh-drag-container"
import DropMenu from "./components/oh-drop"
import DropItem from "./components/oh-drop-item"
import Icon from "./components/oh-drag-container"

const install = (Vue) => {
	Vue.use(DragContainer)
	Vue.use(DropMenu)
	Vue.use(DropItem)
	Vue.use(Icon)
}

export default {
    install,
	DragContainer,
	DropMenu,
	DropItem,
	Icon
}