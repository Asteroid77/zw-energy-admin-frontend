/**
 * 本文件用于项目更新.env环境文件的配置GIT_BRANCH&GIT_COMMIT
 */
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'node:url'

// 获取 Git 分支和 commit 哈希
const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
const commitHash = execSync('git rev-parse --short HEAD').toString().trim()

// 获取当前模块文件路径和所在目录路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 设置 .env 文件的路径
// 获取环境变量中的文件名（默认为 .env.development）
const envFileName = `.env.${process.env.ENV_FILE || 'development'}`
const envFilePath = path.resolve(__dirname, envFileName)

// 如果 .env 文件存在，读取并检查
if (fs.existsSync(envFilePath)) {
  const envContent = fs.readFileSync(envFilePath, 'utf-8')

  // 检查是否已经存在相同的变量
  const branchPattern = /^GIT_BRANCH=.*$/m
  const commitPattern = /^GIT_COMMIT=.*$/m

  // 更新或插入分支信息和 commit 哈希
  let updatedEnvContent = envContent

  // 更新或插入分支信息
  if (branchPattern.test(envContent)) {
    updatedEnvContent = updatedEnvContent.replace(branchPattern, `GIT_BRANCH=${branch}`)
  } else {
    updatedEnvContent += `\nGIT_BRANCH=${branch}`
  }

  // 更新或插入 commit 哈希
  if (commitPattern.test(envContent)) {
    updatedEnvContent = updatedEnvContent.replace(commitPattern, `GIT_COMMIT=${commitHash}`)
  } else {
    updatedEnvContent += `\nGIT_COMMIT=${commitHash}\n`
  }

  // 写回更新后的内容
  fs.writeFileSync(envFilePath, updatedEnvContent, 'utf-8')
  console.log(`${envFileName}文件已更新`)
} else {
  console.error(`错误：${envFileName}文件不存在`)
}
