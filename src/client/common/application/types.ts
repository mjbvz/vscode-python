// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
'use strict';
import {
    Breakpoint,
    BreakpointsChangeEvent,
    CancellationToken,
    ConfigurationChangeEvent,
    DebugConfiguration,
    DebugConfigurationProvider,
    DebugConsole,
    DebugSession,
    DebugSessionCustomEvent,
    Disposable,
    Event,
    FileSystemWatcher,
    GlobPattern,
    InputBoxOptions,
    MessageItem,
    MessageOptions,
    OpenDialogOptions,
    Progress,
    ProgressOptions,
    QuickPickItem,
    QuickPickOptions,
    SaveDialogOptions,
    StatusBarAlignment,
    StatusBarItem,
    Terminal,
    TerminalOptions,
    TextDocument,
    TextDocumentShowOptions,
    TextEditor,
    TextEditorEdit,
    TextEditorOptionsChangeEvent,
    TextEditorSelectionChangeEvent,
    TextEditorViewColumnChangeEvent,
    Uri,
    ViewColumn,
    WorkspaceConfiguration,
    WorkspaceEdit,
    WorkspaceFolder,
    WorkspaceFolderPickOptions,
    WorkspaceFoldersChangeEvent
} from 'vscode';

// tslint:disable:no-any unified-signatures

export const IApplicationShell = Symbol('IApplicationShell');
export interface IApplicationShell {
    showInformationMessage(message: string, ...items: string[]): Thenable<string | undefined>;

    /**
     * Show an information message to users. Optionally provide an array of items which will be presented as
     * clickable buttons.
     *
     * @param message The message to show.
     * @param options Configures the behaviour of the message.
     * @param items A set of items that will be rendered as actions in the message.
     * @return A thenable that resolves to the selected item or `undefined` when being dismissed.
     */
    showInformationMessage(message: string, options: MessageOptions, ...items: string[]): Thenable<string | undefined>;

    /**
     * Show an information message.
     *
     * @see [showInformationMessage](#window.showInformationMessage)
     *
     * @param message The message to show.
     * @param items A set of items that will be rendered as actions in the message.
     * @return A thenable that resolves to the selected item or `undefined` when being dismissed.
     */
    showInformationMessage<T extends MessageItem>(message: string, ...items: T[]): Thenable<T | undefined>;

    /**
     * Show an information message.
     *
     * @see [showInformationMessage](#window.showInformationMessage)
     *
     * @param message The message to show.
     * @param options Configures the behaviour of the message.
     * @param items A set of items that will be rendered as actions in the message.
     * @return A thenable that resolves to the selected item or `undefined` when being dismissed.
     */
    showInformationMessage<T extends MessageItem>(message: string, options: MessageOptions, ...items: T[]): Thenable<T | undefined>;

    /**
     * Show a warning message.
     *
     * @see [showInformationMessage](#window.showInformationMessage)
     *
     * @param message The message to show.
     * @param items A set of items that will be rendered as actions in the message.
     * @return A thenable that resolves to the selected item or `undefined` when being dismissed.
     */
    showWarningMessage(message: string, ...items: string[]): Thenable<string | undefined>;

    /**
     * Show a warning message.
     *
     * @see [showInformationMessage](#window.showInformationMessage)
     *
     * @param message The message to show.
     * @param options Configures the behaviour of the message.
     * @param items A set of items that will be rendered as actions in the message.
     * @return A thenable that resolves to the selected item or `undefined` when being dismissed.
     */
    showWarningMessage(message: string, options: MessageOptions, ...items: string[]): Thenable<string | undefined>;

    /**
     * Show a warning message.
     *
     * @see [showInformationMessage](#window.showInformationMessage)
     *
     * @param message The message to show.
     * @param items A set of items that will be rendered as actions in the message.
     * @return A thenable that resolves to the selected item or `undefined` when being dismissed.
     */
    showWarningMessage<T extends MessageItem>(message: string, ...items: T[]): Thenable<T | undefined>;

    /**
     * Show a warning message.
     *
     * @see [showInformationMessage](#window.showInformationMessage)
     *
     * @param message The message to show.
     * @param options Configures the behaviour of the message.
     * @param items A set of items that will be rendered as actions in the message.
     * @return A thenable that resolves to the selected item or `undefined` when being dismissed.
     */
    showWarningMessage<T extends MessageItem>(message: string, options: MessageOptions, ...items: T[]): Thenable<T | undefined>;

    /**
     * Show an error message.
     *
     * @see [showInformationMessage](#window.showInformationMessage)
     *
     * @param message The message to show.
     * @param items A set of items that will be rendered as actions in the message.
     * @return A thenable that resolves to the selected item or `undefined` when being dismissed.
     */
    showErrorMessage(message: string, ...items: string[]): Thenable<string | undefined>;

    /**
     * Show an error message.
     *
     * @see [showInformationMessage](#window.showInformationMessage)
     *
     * @param message The message to show.
     * @param options Configures the behaviour of the message.
     * @param items A set of items that will be rendered as actions in the message.
     * @return A thenable that resolves to the selected item or `undefined` when being dismissed.
     */
    showErrorMessage(message: string, options: MessageOptions, ...items: string[]): Thenable<string | undefined>;

    /**
     * Show an error message.
     *
     * @see [showInformationMessage](#window.showInformationMessage)
     *
     * @param message The message to show.
     * @param items A set of items that will be rendered as actions in the message.
     * @return A thenable that resolves to the selected item or `undefined` when being dismissed.
     */
    showErrorMessage<T extends MessageItem>(message: string, ...items: T[]): Thenable<T | undefined>;

    /**
     * Show an error message.
     *
     * @see [showInformationMessage](#window.showInformationMessage)
     *
     * @param message The message to show.
     * @param options Configures the behaviour of the message.
     * @param items A set of items that will be rendered as actions in the message.
     * @return A thenable that resolves to the selected item or `undefined` when being dismissed.
     */
    showErrorMessage<T extends MessageItem>(message: string, options: MessageOptions, ...items: T[]): Thenable<T | undefined>;

    /**
     * Shows a selection list.
     *
     * @param items An array of strings, or a promise that resolves to an array of strings.
     * @param options Configures the behavior of the selection list.
     * @param token A token that can be used to signal cancellation.
     * @return A promise that resolves to the selection or `undefined`.
     */
    showQuickPick(items: string[] | Thenable<string[]>, options?: QuickPickOptions, token?: CancellationToken): Thenable<string | undefined>;

    /**
     * Shows a selection list.
     *
     * @param items An array of items, or a promise that resolves to an array of items.
     * @param options Configures the behavior of the selection list.
     * @param token A token that can be used to signal cancellation.
     * @return A promise that resolves to the selected item or `undefined`.
     */
    showQuickPick<T extends QuickPickItem>(items: T[] | Thenable<T[]>, options?: QuickPickOptions, token?: CancellationToken): Thenable<T | undefined>;

    /**
     * Shows a file open dialog to the user which allows to select a file
     * for opening-purposes.
     *
     * @param options Options that control the dialog.
     * @returns A promise that resolves to the selected resources or `undefined`.
     */
    showOpenDialog(options: OpenDialogOptions): Thenable<Uri[] | undefined>;

    /**
     * Shows a file save dialog to the user which allows to select a file
     * for saving-purposes.
     *
     * @param options Options that control the dialog.
     * @returns A promise that resolves to the selected resource or `undefined`.
     */
    showSaveDialog(options: SaveDialogOptions): Thenable<Uri | undefined>;

    /**
     * Opens an input box to ask the user for input.
     *
     * The returned value will be `undefined` if the input box was canceled (e.g. pressing ESC). Otherwise the
     * returned value will be the string typed by the user or an empty string if the user did not type
     * anything but dismissed the input box with OK.
     *
     * @param options Configures the behavior of the input box.
     * @param token A token that can be used to signal cancellation.
     * @return A promise that resolves to a string the user provided or to `undefined` in case of dismissal.
     */
    showInputBox(options?: InputBoxOptions, token?: CancellationToken): Thenable<string | undefined>;

    /**
     * Opens URL in a default browser.
     *
     * @param url Url to open.
     */
    openUrl(url: string): void;

    /**
     * Set a message to the status bar. This is a short hand for the more powerful
     * status bar [items](#window.createStatusBarItem).
     *
     * @param text The message to show, supports icon substitution as in status bar [items](#StatusBarItem.text).
     * @param hideAfterTimeout Timeout in milliseconds after which the message will be disposed.
     * @return A disposable which hides the status bar message.
     */
    setStatusBarMessage(text: string, hideAfterTimeout: number): Disposable;

    /**
     * Set a message to the status bar. This is a short hand for the more powerful
     * status bar [items](#window.createStatusBarItem).
     *
     * @param text The message to show, supports icon substitution as in status bar [items](#StatusBarItem.text).
     * @param hideWhenDone Thenable on which completion (resolve or reject) the message will be disposed.
     * @return A disposable which hides the status bar message.
     */
    setStatusBarMessage(text: string, hideWhenDone: Thenable<any>): Disposable;

    /**
     * Set a message to the status bar. This is a short hand for the more powerful
     * status bar [items](#window.createStatusBarItem).
     *
     * *Note* that status bar messages stack and that they must be disposed when no
     * longer used.
     *
     * @param text The message to show, supports icon substitution as in status bar [items](#StatusBarItem.text).
     * @return A disposable which hides the status bar message.
     */
    setStatusBarMessage(text: string): Disposable;

    /**
     * Creates a status bar [item](#StatusBarItem).
     *
     * @param alignment The alignment of the item.
     * @param priority The priority of the item. Higher values mean the item should be shown more to the left.
     * @return A new status bar item.
     */
    createStatusBarItem(alignment?: StatusBarAlignment, priority?: number): StatusBarItem;
    /**
     * Shows a selection list of [workspace folders](#workspace.workspaceFolders) to pick from.
     * Returns `undefined` if no folder is open.
     *
     * @param options Configures the behavior of the workspace folder list.
     * @return A promise that resolves to the workspace folder or `undefined`.
     */
    showWorkspaceFolderPick(options?: WorkspaceFolderPickOptions): Thenable<WorkspaceFolder | undefined>;

    /**
     * Show progress in the editor. Progress is shown while running the given callback
     * and while the promise it returned isn't resolved nor rejected. The location at which
     * progress should show (and other details) is defined via the passed [`ProgressOptions`](#ProgressOptions).
     *
     * @param task A callback returning a promise. Progress state can be reported with
     * the provided [progress](#Progress)-object.
     *
     * To report discrete progress, use `increment` to indicate how much work has been completed. Each call with
     * a `increment` value will be summed up and reflected as overall progress until 100% is reached (a value of
     * e.g. `10` accounts for `10%` of work done).
     * Note that currently only `ProgressLocation.Notification` is capable of showing discrete progress.
     *
     * To monitor if the operation has been cancelled by the user, use the provided [`CancellationToken`](#CancellationToken).
     * Note that currently only `ProgressLocation.Notification` is supporting to show a cancel button to cancel the
     * long running operation.
     *
     * @return The thenable the task-callback returned.
     */
    withProgress<R>(options: ProgressOptions, task: (progress: Progress<{ message?: string; increment?: number }>, token: CancellationToken) => Thenable<R>): Thenable<R>;
}

export const ICommandManager = Symbol('ICommandManager');

export interface ICommandManager {

    /**
     * Registers a command that can be invoked via a keyboard shortcut,
     * a menu item, an action, or directly.
     *
     * Registering a command with an existing command identifier twice
     * will cause an error.
     *
     * @param command A unique identifier for the command.
     * @param callback A command handler function.
     * @param thisArg The `this` context used when invoking the handler function.
     * @return Disposable which unregisters this command on disposal.
     */
    registerCommand(command: string, callback: (...args: any[]) => any, thisArg?: any): Disposable;

    /**
     * Registers a text editor command that can be invoked via a keyboard shortcut,
     * a menu item, an action, or directly.
     *
     * Text editor commands are different from ordinary [commands](#commands.registerCommand) as
     * they only execute when there is an active editor when the command is called. Also, the
     * command handler of an editor command has access to the active editor and to an
     * [edit](#TextEditorEdit)-builder.
     *
     * @param command A unique identifier for the command.
     * @param callback A command handler function with access to an [editor](#TextEditor) and an [edit](#TextEditorEdit).
     * @param thisArg The `this` context used when invoking the handler function.
     * @return Disposable which unregisters this command on disposal.
     */
    registerTextEditorCommand(command: string, callback: (textEditor: TextEditor, edit: TextEditorEdit, ...args: any[]) => void, thisArg?: any): Disposable;

    /**
     * Executes the command denoted by the given command identifier.
     *
     * * *Note 1:* When executing an editor command not all types are allowed to
     * be passed as arguments. Allowed are the primitive types `string`, `boolean`,
     * `number`, `undefined`, and `null`, as well as [`Position`](#Position), [`Range`](#Range), [`Uri`](#Uri) and [`Location`](#Location).
     * * *Note 2:* There are no restrictions when executing commands that have been contributed
     * by extensions.
     *
     * @param command Identifier of the command to execute.
     * @param rest Parameters passed to the command function.
     * @return A thenable that resolves to the returned value of the given command. `undefined` when
     * the command handler function doesn't return anything.
     */
    executeCommand<T>(command: string, ...rest: any[]): Thenable<T | undefined>;

    /**
     * Retrieve the list of all available commands. Commands starting an underscore are
     * treated as internal commands.
     *
     * @param filterInternal Set `true` to not see internal commands (starting with an underscore)
     * @return Thenable that resolves to a list of command ids.
     */
    getCommands(filterInternal?: boolean): Thenable<string[]>;
}

export const IDocumentManager = Symbol('IDocumentManager');

export interface IDocumentManager {
    /**
     * All text documents currently known to the system.
     *
     * @readonly
     */
    readonly textDocuments: TextDocument[];
    /**
     * The currently active editor or `undefined`. The active editor is the one
     * that currently has focus or, when none has focus, the one that has changed
     * input most recently.
     */
    readonly activeTextEditor: TextEditor | undefined;

    /**
     * The currently visible editors or an empty array.
     */
    readonly visibleTextEditors: TextEditor[];

    /**
     * An [event](#Event) which fires when the [active editor](#window.activeTextEditor)
     * has changed. *Note* that the event also fires when the active editor changes
     * to `undefined`.
     */
    readonly onDidChangeActiveTextEditor: Event<TextEditor | undefined>;

    /**
     * An [event](#Event) which fires when the array of [visible editors](#window.visibleTextEditors)
     * has changed.
     */
    readonly onDidChangeVisibleTextEditors: Event<TextEditor[]>;

    /**
     * An [event](#Event) which fires when the selection in an editor has changed.
     */
    readonly onDidChangeTextEditorSelection: Event<TextEditorSelectionChangeEvent>;

    /**
     * An [event](#Event) which fires when the options of an editor have changed.
     */
    readonly onDidChangeTextEditorOptions: Event<TextEditorOptionsChangeEvent>;

    /**
     * An [event](#Event) which fires when the view column of an editor has changed.
     */
    readonly onDidChangeTextEditorViewColumn: Event<TextEditorViewColumnChangeEvent>;

    /**
     * An event that is emitted when a [text document](#TextDocument) is opened.
     */
    readonly onDidOpenTextDocument: Event<TextDocument>;
    /**
     * An event that is emitted when a [text document](#TextDocument) is disposed.
     */
    readonly onDidCloseTextDocument: Event<TextDocument>;
    /**
     * An event that is emitted when a [text document](#TextDocument) is saved to disk.
     */
    readonly onDidSaveTextDocument: Event<TextDocument>;

    /**
     * Show the given document in a text editor. A [column](#ViewColumn) can be provided
     * to control where the editor is being shown. Might change the [active editor](#window.activeTextEditor).
     *
     * @param document A text document to be shown.
     * @param column A view column in which the [editor](#TextEditor) should be shown. The default is the [one](#ViewColumn.One), other values
     * are adjusted to be `Min(column, columnCount + 1)`, the [active](#ViewColumn.Active)-column is
     * not adjusted.
     * @param preserveFocus When `true` the editor will not take focus.
     * @return A promise that resolves to an [editor](#TextEditor).
     */
    showTextDocument(document: TextDocument, column?: ViewColumn, preserveFocus?: boolean): Thenable<TextEditor>;

    /**
     * Show the given document in a text editor. [Options](#TextDocumentShowOptions) can be provided
     * to control options of the editor is being shown. Might change the [active editor](#window.activeTextEditor).
     *
     * @param document A text document to be shown.
     * @param options [Editor options](#TextDocumentShowOptions) to configure the behavior of showing the [editor](#TextEditor).
     * @return A promise that resolves to an [editor](#TextEditor).
     */
    showTextDocument(document: TextDocument, options?: TextDocumentShowOptions): Thenable<TextEditor>;

    /**
     * A short-hand for `openTextDocument(uri).then(document => showTextDocument(document, options))`.
     *
     * @see [openTextDocument](#openTextDocument)
     *
     * @param uri A resource identifier.
     * @param options [Editor options](#TextDocumentShowOptions) to configure the behavior of showing the [editor](#TextEditor).
     * @return A promise that resolves to an [editor](#TextEditor).
     */
    showTextDocument(uri: Uri, options?: TextDocumentShowOptions): Thenable<TextEditor>;
    /**
     * Opens a document. Will return early if this document is already open. Otherwise
     * the document is loaded and the [didOpen](#workspace.onDidOpenTextDocument)-event fires.
     *
     * The document is denoted by an [uri](#Uri). Depending on the [scheme](#Uri.scheme) the
     * following rules apply:
     * * `file`-scheme: Open a file on disk, will be rejected if the file does not exist or cannot be loaded.
     * * `untitled`-scheme: A new file that should be saved on disk, e.g. `untitled:c:\frodo\new.js`. The language
     * will be derived from the file name.
     * * For all other schemes the registered text document content [providers](#TextDocumentContentProvider) are consulted.
     *
     * *Note* that the lifecycle of the returned document is owned by the editor and not by the extension. That means an
     * [`onDidClose`](#workspace.onDidCloseTextDocument)-event can occur at any time after opening it.
     *
     * @param uri Identifies the resource to open.
     * @return A promise that resolves to a [document](#TextDocument).
     */
    openTextDocument(uri: Uri): Thenable<TextDocument>;

    /**
     * A short-hand for `openTextDocument(Uri.file(fileName))`.
     *
     * @see [openTextDocument](#openTextDocument)
     * @param fileName A name of a file on disk.
     * @return A promise that resolves to a [document](#TextDocument).
     */
    openTextDocument(fileName: string): Thenable<TextDocument>;

    /**
     * Opens an untitled text document. The editor will prompt the user for a file
     * path when the document is to be saved. The `options` parameter allows to
     * specify the *language* and/or the *content* of the document.
     *
     * @param options Options to control how the document will be created.
     * @return A promise that resolves to a [document](#TextDocument).
     */
    openTextDocument(options?: { language?: string; content?: string }): Thenable<TextDocument>;
    /**
     * Make changes to one or many resources as defined by the given
     * [workspace edit](#WorkspaceEdit).
     *
     * When applying a workspace edit, the editor implements an 'all-or-nothing'-strategy,
     * that means failure to load one document or make changes to one document will cause
     * the edit to be rejected.
     *
     * @param edit A workspace edit.
     * @return A thenable that resolves when the edit could be applied.
     */
    applyEdit(edit: WorkspaceEdit): Thenable<boolean>;
}

export const IWorkspaceService = Symbol('IWorkspaceService');

export interface IWorkspaceService {
    /**
     * ~~The folder that is open in the editor. `undefined` when no folder
     * has been opened.~~
     *
     * @readonly
     */
    readonly rootPath: string | undefined;

    /**
     * List of workspace folders or `undefined` when no folder is open.
     * *Note* that the first entry corresponds to the value of `rootPath`.
     *
     * @readonly
     */
    readonly workspaceFolders: WorkspaceFolder[] | undefined;

    /**
     * An event that is emitted when a workspace folder is added or removed.
     */
    readonly onDidChangeWorkspaceFolders: Event<WorkspaceFoldersChangeEvent>;

    /**
     * An event that is emitted when the [configuration](#WorkspaceConfiguration) changed.
     */
    readonly onDidChangeConfiguration: Event<ConfigurationChangeEvent>;
    /**
     * Whether a workspace folder exists
     * @type {boolean}
     * @memberof IWorkspaceService
     */
    readonly hasWorkspaceFolders: boolean;

    /**
     * Returns the [workspace folder](#WorkspaceFolder) that contains a given uri.
     * * returns `undefined` when the given uri doesn't match any workspace folder
     * * returns the *input* when the given uri is a workspace folder itself
     *
     * @param uri An uri.
     * @return A workspace folder or `undefined`
     */
    getWorkspaceFolder(uri: Uri): WorkspaceFolder | undefined;

    /**
     * Returns a path that is relative to the workspace folder or folders.
     *
     * When there are no [workspace folders](#workspace.workspaceFolders) or when the path
     * is not contained in them, the input is returned.
     *
     * @param pathOrUri A path or uri. When a uri is given its [fsPath](#Uri.fsPath) is used.
     * @param includeWorkspaceFolder When `true` and when the given path is contained inside a
     * workspace folder the name of the workspace is prepended. Defaults to `true` when there are
     * multiple workspace folders and `false` otherwise.
     * @return A path relative to the root or the input.
     */
    asRelativePath(pathOrUri: string | Uri, includeWorkspaceFolder?: boolean): string;

    /**
     * Creates a file system watcher.
     *
     * A glob pattern that filters the file events on their absolute path must be provided. Optionally,
     * flags to ignore certain kinds of events can be provided. To stop listening to events the watcher must be disposed.
     *
     * *Note* that only files within the current [workspace folders](#workspace.workspaceFolders) can be watched.
     *
     * @param globPattern A [glob pattern](#GlobPattern) that is applied to the absolute paths of created, changed,
     * and deleted files. Use a [relative pattern](#RelativePattern) to limit events to a certain [workspace folder](#WorkspaceFolder).
     * @param ignoreCreateEvents Ignore when files have been created.
     * @param ignoreChangeEvents Ignore when files have been changed.
     * @param ignoreDeleteEvents Ignore when files have been deleted.
     * @return A new file system watcher instance.
     */
    createFileSystemWatcher(globPattern: GlobPattern, ignoreCreateEvents?: boolean, ignoreChangeEvents?: boolean, ignoreDeleteEvents?: boolean): FileSystemWatcher;

    /**
     * Find files across all [workspace folders](#workspace.workspaceFolders) in the workspace.
     *
     * @sample `findFiles('**∕*.js', '**∕node_modules∕**', 10)`
     * @param include A [glob pattern](#GlobPattern) that defines the files to search for. The glob pattern
     * will be matched against the file paths of resulting matches relative to their workspace. Use a [relative pattern](#RelativePattern)
     * to restrict the search results to a [workspace folder](#WorkspaceFolder).
     * @param exclude  A [glob pattern](#GlobPattern) that defines files and folders to exclude. The glob pattern
     * will be matched against the file paths of resulting matches relative to their workspace.
     * @param maxResults An upper-bound for the result.
     * @param token A token that can be used to signal cancellation to the underlying search engine.
     * @return A thenable that resolves to an array of resource identifiers. Will return no results if no
     * [workspace folders](#workspace.workspaceFolders) are opened.
     */
    findFiles(include: GlobPattern, exclude?: GlobPattern, maxResults?: number, token?: CancellationToken): Thenable<Uri[]>;

    /**
     * Get a workspace configuration object.
     *
     * When a section-identifier is provided only that part of the configuration
     * is returned. Dots in the section-identifier are interpreted as child-access,
     * like `{ myExt: { setting: { doIt: true }}}` and `getConfiguration('myExt.setting').get('doIt') === true`.
     *
     * When a resource is provided, configuration scoped to that resource is returned.
     *
     * @param section A dot-separated identifier.
     * @param resource A resource for which the configuration is asked for
     * @return The full configuration or a subset.
     */
    getConfiguration(section?: string, resource?: Uri): WorkspaceConfiguration;
}

export const ITerminalManager = Symbol('ITerminalManager');

export interface ITerminalManager {
    /**
     * An [event](#Event) which fires when a terminal is disposed.
     */
    readonly onDidCloseTerminal: Event<Terminal>;
    /**
     * An [event](#Event) which fires when a terminal has been created, either through the
     * [createTerminal](#window.createTerminal) API or commands.
     */
    readonly onDidOpenTerminal: Event<Terminal>;
    /**
     * Creates a [Terminal](#Terminal). The cwd of the terminal will be the workspace directory
     * if it exists, regardless of whether an explicit customStartPath setting exists.
     *
     * @param options A TerminalOptions object describing the characteristics of the new terminal.
     * @return A new Terminal.
     */
    createTerminal(options: TerminalOptions): Terminal;
}

export const IDebugService = Symbol('IDebugManager');

export interface IDebugService {
    /**
     * The currently active [debug session](#DebugSession) or `undefined`. The active debug session is the one
     * represented by the debug action floating window or the one currently shown in the drop down menu of the debug action floating window.
     * If no debug session is active, the value is `undefined`.
     */
    readonly activeDebugSession: DebugSession | undefined;

    /**
     * The currently active [debug console](#DebugConsole).
     */
    readonly activeDebugConsole: DebugConsole;

    /**
     * List of breakpoints.
     */
    readonly breakpoints: Breakpoint[];

    /**
     * An [event](#Event) which fires when the [active debug session](#debug.activeDebugSession)
     * has changed. *Note* that the event also fires when the active debug session changes
     * to `undefined`.
     */
    readonly onDidChangeActiveDebugSession: Event<DebugSession | undefined>;

    /**
     * An [event](#Event) which fires when a new [debug session](#DebugSession) has been started.
     */
    readonly onDidStartDebugSession: Event<DebugSession>;

    /**
     * An [event](#Event) which fires when a custom DAP event is received from the [debug session](#DebugSession).
     */
    readonly onDidReceiveDebugSessionCustomEvent: Event<DebugSessionCustomEvent>;

    /**
     * An [event](#Event) which fires when a [debug session](#DebugSession) has terminated.
     */
    readonly onDidTerminateDebugSession: Event<DebugSession>;

    /**
     * An [event](#Event) that is emitted when the set of breakpoints is added, removed, or changed.
     */
    readonly onDidChangeBreakpoints: Event<BreakpointsChangeEvent>;

    /**
     * Register a [debug configuration provider](#DebugConfigurationProvider) for a specific debug type.
     * More than one provider can be registered for the same type.
     *
     * @param type The debug type for which the provider is registered.
     * @param provider The [debug configuration provider](#DebugConfigurationProvider) to register.
     * @return A [disposable](#Disposable) that unregisters this provider when being disposed.
     */
    registerDebugConfigurationProvider(debugType: string, provider: DebugConfigurationProvider): Disposable;

    /**
     * Start debugging by using either a named launch or named compound configuration,
     * or by directly passing a [DebugConfiguration](#DebugConfiguration).
     * The named configurations are looked up in '.vscode/launch.json' found in the given folder.
     * Before debugging starts, all unsaved files are saved and the launch configurations are brought up-to-date.
     * Folder specific variables used in the configuration (e.g. '${workspaceFolder}') are resolved against the given folder.
     * @param folder The [workspace folder](#WorkspaceFolder) for looking up named configurations and resolving variables or `undefined` for a non-folder setup.
     * @param nameOrConfiguration Either the name of a debug or compound configuration or a [DebugConfiguration](#DebugConfiguration) object.
     * @return A thenable that resolves when debugging could be successfully started.
     */
    startDebugging(folder: WorkspaceFolder | undefined, nameOrConfiguration: string | DebugConfiguration): Thenable<boolean>;

    /**
     * Add breakpoints.
     * @param breakpoints The breakpoints to add.
     */
    addBreakpoints(breakpoints: Breakpoint[]): void;

    /**
     * Remove breakpoints.
     * @param breakpoints The breakpoints to remove.
     */
    removeBreakpoints(breakpoints: Breakpoint[]): void;
}

export const IApplicationEnvironment = Symbol('IApplicationEnvironment');
export interface IApplicationEnvironment {
    /**
     * The application name of the editor, like 'VS Code'.
     *
     * @readonly
     */
    appName: string;

    /**
     * The extension name.
     *
     * @readonly
     */
    extensionName: string;

    /**
     * The application root folder from which the editor is running.
     *
     * @readonly
     */
    appRoot: string;

    /**
     * Represents the preferred user-language, like `de-CH`, `fr`, or `en-US`.
     *
     * @readonly
     */
    language: string;

    /**
     * A unique identifier for the computer.
     *
     * @readonly
     */
    machineId: string;

    /**
     * A unique identifier for the current session.
     * Changes each time the editor is started.
     *
     * @readonly
     */
    sessionId: string;
    /**
     * Contents of `package.json` as a JSON object.
     *
     * @type {any}
     * @memberof IApplicationEnvironment
     */
    packageJson: any;
}

export const IWebPanelMessageListener = Symbol('IWebPanelMessageListener');
export interface IWebPanelMessageListener extends Disposable {
    /**
     * Listens to web panel messages
     * @param message: the message being sent
     * @param payload: extra data that came with the message
     * @return A IWebPanel that can be used to show html pages.
     */
    onMessage(message: string, payload: any): void;
}

export type WebPanelMessage = {
    /**
     * Message type
     */
    type: string;

    /**
     * Payload
     */
    payload?: any;
};

// Wraps the VS Code webview panel
export const IWebPanel = Symbol('IWebPanel');
export interface IWebPanel {
    /**
     * Makes the webpanel show up.
     * @return A Promise that can be waited on
     */
    show(): Promise<void>;

    /**
     * Indicates if this web panel is visible or not.
     */
    isVisible(): boolean;

    /**
     * Sends a message to the hosted html page
     */
    postMessage(message: WebPanelMessage);
}

// Wraps the VS Code api for creating a web panel
export const IWebPanelProvider = Symbol('IWebPanelProvider');
export interface IWebPanelProvider {
    /**
     * Creates a new webpanel
     * @param listener for messages from the panel
     * @param title: title of the panel when it shows
     * @param: mainScriptPath: full path in the output folder to the script
     * @return A IWebPanel that can be used to show html pages.
     */
    create(listener: IWebPanelMessageListener, title: string, mainScriptPath: string, embeddedCss?: string): IWebPanel;
}
