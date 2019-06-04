import { DIRECTORY_TYPE, ARCHIVE_TYPE } from '../../config/constants'

export const directoryTreeMapping = tree => {
  let level = 0
  let mappedTree = []
  const mapping = (tree, treeLevel) => {
    if (tree.name && tree.children) {
      tree.children.map(child => {
        if (child.children) {
          mappedTree = [ ...mappedTree, { name: child.name, level: treeLevel ? treeLevel : 0, type: DIRECTORY_TYPE } ]
          mapping(child, treeLevel + 1)
        } else {
          mappedTree = [ ...mappedTree, { name: child.name, level: treeLevel ? treeLevel : 0, type: ARCHIVE_TYPE } ]
        }
        return null
      })
    }
    return mappedTree
  }
  return mapping(tree, level)
}